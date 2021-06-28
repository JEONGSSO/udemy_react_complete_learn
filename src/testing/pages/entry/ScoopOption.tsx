const ScoopOption = ({
  name,
  imagePath,
  optionType,
}: {
  name: string;
  imagePath: string;
  optionType: string;
  updateItemCount: Function;
}) => {
  return (
    <>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} ${optionType}`}
      />
    </>
  );
};

export default ScoopOption;
