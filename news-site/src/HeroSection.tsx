const HeroSection = () => {
  return (
    <section className="flex w-full gap-5 bg-white justify-center">
      <div className="flex flex-col p-5">
        <div>
          <img src="https://via.placeholder.com/450" alt="" />
          <h2 className="text-black">Highlight</h2>
          <div className="flex flex-row">
            <p className="text-gray-500">source</p>
            <p className="text-gray-500">time</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-5 w-[50%]"></div>
    </section>
  );
};

export default HeroSection;
