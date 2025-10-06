export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className="font-bold   text-cyan-500 rounded-md px-1 py-0.5">
      {children}
    </span>
  );
};
