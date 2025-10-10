export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className=" text-purple rounded-md px-1 py-0.5">{children}</span>
  );
};
