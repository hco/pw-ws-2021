import ShallowRenderer from "react-test-renderer/shallow";
import MessageList from "./MessageList";
const messages = [
  {
    id: "das",
    date: 4711,
    message: "Hallo Welt",
    author: "Don Fabian",
  },
  {
    id: "da312231s",
    date: 4712,
    message: "Hallo Welt",
    author: "Don Fabian",
  },
  {
    id: "23432",
    date: 4713,
    message: "Hallo Welt",
    author: "Don Fabian",
  },
];
describe("<MessageList />", () => {
  it("matches shallow snapshot", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MessageList messages={messages} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchInlineSnapshot(`
      <div>
        <MessageView
          message={
            Object {
              "author": "Don Fabian",
              "date": 4711,
              "id": "das",
              "message": "Hallo Welt",
            }
          }
        />
        <MessageView
          message={
            Object {
              "author": "Don Fabian",
              "date": 4712,
              "id": "da312231s",
              "message": "Hallo Welt",
            }
          }
        />
        <MessageView
          message={
            Object {
              "author": "Don Fabian",
              "date": 4713,
              "id": "23432",
              "message": "Hallo Welt",
            }
          }
        />
      </div>
    `);
  });
});
