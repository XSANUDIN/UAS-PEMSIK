function ContentCard({ image, title, text, children, reverse }) {
    return (
      <div className={`flex items-center flex-wrap mb-20 ${reverse ? 'md:flex-row-reverse md:text-right' : ''}`}>
        <div className="w-full md:w-1/2 pr-10">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">{title}</h4>
          <p className="text-gray-600 mb-8">{text}</p>
        </div>
        <div className="w-full md:w-1/2">
          <img className="rounded-lg" src={image}/>
          {children}
        </div>
      </div>
    );
  }
  
  export default ContentCard;
  