function Table({ columns, data }) {
  return (
    <div className="table-wrapper">

      <table className="order-table">

        <thead>

          <tr>

            {columns.map((column, index) => (

              <th key={index}>
                {column.label}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index}>

              {columns.map((column, idx) => (

                <td key={idx}>
                  {row[column.key]}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Table;