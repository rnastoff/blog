

interface PaginationProps {
  pageNumber: number;
  onChange(page: number): void;
  hasNextButton: boolean;
}

const Pagination = ({ pageNumber, onChange, hasNextButton }: PaginationProps) => {
  const increment = () => onChange(pageNumber + 1);
  const decrement = () => onChange(pageNumber - 1);

  const previousButton = <button
    className="font-bold border-primary border-2 py-2 w-28 mr-2 hover:text-primary"
    onClick={decrement}
  >PREVIOUS</button>;

  const nextButton = <button
    className="font-bold border-primary border-2 py-2 w-28 ml-2 hover:text-primary"
    onClick={increment}
  >NEXT</button>;

  return (
    <div className="text-center">
      {pageNumber > 1 && previousButton}
      {hasNextButton && nextButton}
    </div>
  )
}

export default Pagination;