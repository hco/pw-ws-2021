import { render } from "@testing-library/react";
import { MessageView } from "./MessageView";

describe("<MessageView />", () => {
  it("renders without throwing", () => {
    render(
      <MessageView
        message={{
          author: "Don Adrian",
          date: 123321,
          message: "HAllo React!",
          id: "123321213",
        }}
      />
    );
  });

  it("renders the message", () => {
    const { container } = render(
      <MessageView
        message={{
          author: "Don",
          date: 123321,
          message: "Hallo Don!",
          id: "123321213",
        }}
      />
    );

    // expect(container.firstChild?.textContent).toMatchInlineSnapshot(
    //   `"Hallo Don!Don"`
    // );
  });

  it("renders according to snapshot", () => {
    const { container } = render(
      <MessageView
        message={{
          author: "Don Adrian",
          date: 123321,
          message: "HAllo React!",
          id: "123321213",
        }}
      />
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <article>
        HAllo React!
        <footer>
          Don Adrian
        </footer>
      </article>
    `);
  });
});
