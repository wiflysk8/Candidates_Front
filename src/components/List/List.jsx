import Item from "../Item/Item";

const List = ({ candidates }) => {
  return (
    <>
      {candidates.map((candidate) => (
        <div className="candidate" key={candidate._id}>
          <Item candidate={candidate} />
        </div>
      ))}
    </>
  );
};

export default List;
