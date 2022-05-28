import React from "react";

const CatalogoApi = ({ results = [] }) => {
  return (
    <>
      {results.map((item, index) => (
        <div key={index} className="col">
          <div className="max-w-[256px] bg-white rounded-lg shadow-lg shadow-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <a href={item.url}>
              <img
                className="rounded-t-lg max-w-auto"
                src={item.image}
                alt=""
              />
            </a>
            <div>
              <a href={item.url}>
                {(() => {
                  if (item.status === "Alive") {
                    return (
                      <h5 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                        <span className="text-green-500 text-2xl font-bold">
                          {" "}
                          ●
                        </span>
                      </h5>
                    );
                  } else if (item.status === "unknown") {
                    return (
                      <h5 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                        <span className="text-gray-400 text-xl font-bold">
                          {" "}
                          ?
                        </span>
                      </h5>
                    );
                  } else {
                    return (
                      <h5 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                        <span className="text-red-500 text-2xl font-bold">
                          {" "}
                          ●
                        </span>
                      </h5>
                    );
                  }
                })()}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default CatalogoApi;
