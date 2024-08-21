import React, { useEffect, useRef } from "react";
import "./AnalyticsChart.css";

interface Dataset {
  label: string;
  data: number[];
  color: string;
}

interface Data {
  labels: string[];
  datasets: Dataset[];
}

interface AnalyticsChartProps {
  data: Data;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawLine = (points: { x: number; y: number }[], color: string) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.moveTo(points[0].x, points[0].y);

      points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });

      ctx.stroke();
      ctx.closePath();

      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      });
    };

    const renderChart = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "#394b6b";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 4; i++) {
        const y = (height / 5) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw labels
      ctx.fillStyle = "#d1d5db";
      ctx.font = "12px Arial";
      data.labels.forEach((label, index) => {
        const x = (width / (data.labels.length - 1)) * index;
        const y = height - 5;
        ctx.fillText(label, x, y);
      });

      // Draw the lines
      data.datasets.forEach((dataset) => {
        const points = dataset.data.map((value, index) => {
          const x = (width / (data.labels.length - 1)) * index;
          const y = height - (value / 50) * height;
          return { x, y };
        });
        drawLine(points, dataset.color);
      });
    };

    renderChart();
  }, [data]);

  return (
    <div className="chart-container">
      <div className="chart-header">
        <span>Analytics</span>
        <span>This week</span>
      </div>
      <canvas ref={canvasRef} width={800} height={200}></canvas>
    </div>
  );
};

export default AnalyticsChart;
