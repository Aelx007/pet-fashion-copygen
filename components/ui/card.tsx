export const Card = ({ children, ...props }: any) => (
  <div className="border rounded-xl shadow-md" {...props}>{children}</div>
);

export const CardContent = ({ children, ...props }: any) => (
  <div {...props}>{children}</div>
);
