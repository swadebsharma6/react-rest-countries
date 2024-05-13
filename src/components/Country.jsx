const Country = ({ country }) => {
  console.log(country);
  const { population, name, region, flags, area } = country;
  return (
    <div className="border p-4 m-4 rounded-md">
      <img src={flags.png} alt="" />
      <h3 className="text-xl font-bold">{name.official}</h3>
      <h4>Region: {region}</h4>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
