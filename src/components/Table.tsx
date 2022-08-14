type IssueType = {
  name: string,
  price: string,
  type: string,
  state: string
}

export default function Table(props: { issues: IssueType[] }) {
  const issues = props.issues;

  return (
    <div>
      <table>
        <thead>
          <th>Issue</th>
          <th>Price</th>
          <th>Type</th>
          <th>State</th>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr>
              <td>{issue.name}</td>
              <td>{issue.price}</td>
              <td>{issue.type}</td>
              <td>{issue.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
