import React, { useEffect, useRef, useState } from "react";

type item = {
  image: any;
  children?: React.ReactNode;
  getColor: (colors: string[]) => void;
  className?: any;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

const ColorExtractor = ({ image, children, getColor, className }: item) => {
  const canvasRef = useRef<any>();
  const colors: string[] = [];

  const getColors = (ctx: any, canvas: any) => {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i < 10; i++) {
      const color: RGB = {} as RGB;
      color.r = data[i];
      color.g = data[i + 1];
      color.b = data[i + 2];
      //   setcolors([...colors, color]);
      colors.push(`rgb(${color.r},${color.g},${color.b})`);
    }
    getColor(colors);
  };

  const loadImage = () => {
    const img = new Image();

    return new Promise<void>((resolve, reject) => {
      img.src = image;
      img.crossOrigin = "anonymous";
      img.onload = () => resolve();
      img.onerror = () => reject();
    }).then(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        getColors(ctx, canvas);
      }
    });
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <canvas className={className} ref={canvasRef}>
      {children}
    </canvas>
  );
};

export default ColorExtractor;
