export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={
        "font-bold bg-emerald-100 bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5"
      }
    >
      {children}
    </span>
  );
};
