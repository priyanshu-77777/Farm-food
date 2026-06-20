import { Button, Input, Modal, Toast, Loader } from "../Components/ui";

function ComponentDemo() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>UI Components Demo</h1>

      <Button
        text="Click Me"
        onClick={() => alert("Button clicked")}
      />

      <br /><br />

      <Input placeholder="Enter text" />

      <br /><br />

      <Modal
        title="Demo Modal"
        message="This is a modal component."
      />

      <br/>

      <Toast message="Product added successfully!" />

      <br /><br />

      <Loader />
    </div>
  );
}

export default ComponentDemo;