export const Button = ({ children, ...props }: any) => (
  <button {...props} className="px-4 py-2 bg-black text-white rounded hover:opacity-80 disabled:opacity-50 flex items-center justify-center">
    {children}
  </button>
);
