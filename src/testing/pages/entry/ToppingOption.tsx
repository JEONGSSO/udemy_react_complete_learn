const ToppingOptions = ({
  name,
  imagePath,
  updateItemCount,
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
        alt={`${name} toppings`}
      />
      <label htmlFor={name}>{name}</label>
      <form>
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
        />
      </form>
    </>
  );
};

export default ToppingOptions;
