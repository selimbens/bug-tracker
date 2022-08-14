export default function Input() {
  return (
    <div>
      <h3>Type your issue here</h3>
      <div>
        <label htmlFor="name">name:</label>
        <input title="name" name="name" type="text" placeholder="name"></input>
      </div>
      <div>
        <label htmlFor="price">price:</label>
        <input title="price" type="text" placeholder="price"></input>
      </div><div>
        <label htmlFor="price">type:</label>
        <input title="type" type="text" placeholder="type"></input>
      </div>
    </div>
  );
}
