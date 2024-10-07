const Package = ({ blok }) => {
  console.log(blok);
  return (
    <div className={blok.wrapperTailwind}>
      <div className={blok.contentTailwind}>
        <div className="grid grid-cols-3 gap-8">
          {/* Left side: Package Details */}
          <div className="col-span-2">
            {/* Package Name */}
            <h2 className={blok.package_nameTailwind}>{blok.package_name}</h2>
            {/* Package Description */}
            <p className="text-gray-200 mt-2">{blok.package_description}</p>

            <hr className="my-4 border-gray-400" />

            {/* Feature Title */}
            <h3 className="text-yellow-400 text-xl font-semibold">
              {blok.feature_title}
            </h3>

            {/* Feature Items */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <ul className="space-y-2">
                {blok.feature_items.slice(0, Math.ceil(blok.feature_items.length / 2)).map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-white">✔</span> {feature.text}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {blok.feature_items.slice(Math.ceil(blok.feature_items.length / 2)).map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-white">✔</span> {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side: Free Trial Button */}
          <div className="flex flex-col justify-center items-center bg-indigo-700 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-white">Free Trial</h3>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition text-lg font-medium mt-4 flex items-center space-x-2">
              <span>✨</span>
              <span>{blok.action_button_label}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
