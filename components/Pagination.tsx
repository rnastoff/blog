interface PaginationProps {
  pageNumber: number;
  onChange(page: number): void;
  hasNextButton: boolean;
  hasPreviousButton: boolean;
}

const Pagination = ({ pageNumber, onChange, hasNextButton, hasPreviousButton }: PaginationProps) => {
  const increment = () => onChange(pageNumber + 1);
  const decrement = () => onChange(pageNumber - 1);

  //couple variables for adding/removing margin right/margin left

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
      {hasPreviousButton && previousButton}
      {hasNextButton && nextButton}
    </div>
  )
}

export default Pagination;