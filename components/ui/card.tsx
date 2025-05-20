import React from "react";

export function Card({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`border rounded-xl shadow-sm bg-white ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={className}>{children}</div>;
}
