import React from "react";

const Detail = props => {
  const { detail } = props;
  return (
    <div>
      {detail ? (
        <div>
          <div>
            <table className="detailTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {detail.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Detail;
