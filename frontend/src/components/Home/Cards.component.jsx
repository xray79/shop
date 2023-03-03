const Cards = () => {
  const cardInfo = [
    [
      "Price",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quas, quod architecto cupiditate alias numquam voluptas! Unde eveniet culpa architecto.",
    ],
    [
      "Delivery",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quas, quod architecto cupiditate alias numquam voluptas! Unde eveniet culpa architecto.",
    ],
    [
      "Convenience",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quas, quod architecto cupiditate alias numquam voluptas! Unde eveniet culpa architecto.",
    ],
  ];

  return (
    <>
      <div className="cardsContainer w-3/4 mx-auto py-28">
        <h2 className="cardsTitle text-4xl text-center">What We Offer</h2>

        <div className="cardsFlex my-10 mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
          {cardInfo.map(([title, text], i) => (
            <div
              key={i}
              className="card bg-blue-900 text-white h-80 w-80 p-8 rounded-lg text-center flex flex-col justify-between"
            >
              <h3 className="cardTitle text-3xl">{title}</h3>
              <p className="cardText">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cards;
