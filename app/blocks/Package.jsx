const Package = ({ blok }) => {
  //console.log(blok);
  const Wrapper = ({ className, children }) => (
    className ? <div className={className} >{children}</div> : <>{children}</>
  );
  return (
    <Wrapper className={blok.wrapperTailwind}>
      <Wrapper className={blok.contentTailwind}>
        <div className="grid grid-cols-3 gap-8">
          {/* Left side: Package Details */}
          <div className="col-span-2">
            {/* Package Name */}
            <h2 className={blok.package_nameTailwind}>{blok.package_name}</h2>
            {/* Package Description */}
            <p className={blok.package_descriptionTailwind}>{blok.package_description}</p>

            <hr className="my-4 border-gray-400" />

            {/* Feature Title */}
            <h3 className={blok.package_titleTailwind}>
              {blok.feature_title}
            </h3>

            {/* Feature Items */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <ul className="space-y-2">
                {blok.feature_items.slice(0, Math.ceil(blok.feature_items.length / 2)).map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06L6.53 12.53a.75.75 0 01-1.06 0l-3.25-3.25a.75.75 0 111.06-1.06L6 10.44l6.22-6.22a.75.75 0 011.06 0z" />
                      </svg>
                    </span>  {feature.text}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {blok.feature_items.slice(Math.ceil(blok.feature_items.length / 2)).map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06L6.53 12.53a.75.75 0 01-1.06 0l-3.25-3.25a.75.75 0 111.06-1.06L6 10.44l6.22-6.22a.75.75 0 011.06 0z" />
                      </svg>
                    </span> {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side: Free Trial Button */}
          <div className={blok.action_wrapperTailwind}>
            <h3 className={blok.action_titleTailwind}>{blok.action_title}</h3>
            <button className={blok.action_buttonTailwind}>
              <img
                  src={blok.action_button_icon.filename}
              />
              <span  className={blok.action_button_labelTailwind}>{blok.action_button_label}</span>
            </button>
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Package;
