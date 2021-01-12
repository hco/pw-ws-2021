import React, { useEffect, useState } from "react";

interface Props {
  userId: number;
}

class ClassComponentExample extends React.Component<Props> {
  state: any = {
    user: null,
  };

  componentDidMount = () => {
    fetch("/api/user/" + this.props.userId).then((response) =>
      // magie mit response
      this.setState({ user: response })
    );
  };

  render() {
    if (!this.state.user) {
      return <div>loading</div>;
    }

    return <div>{this.state.user.name}</div>;
  }
}

const FunctionComponentExample: React.FunctionComponent<Props> = ({
  userId,
}) => {
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
    fetch("/api/user/" + userId).then((response) =>
      // magie mit response
      setUser({ response })
    );
  }, [userId]);

  if (!user) {
    return <div>loading</div>;
  }

  return <div>{user.name}</div>;
};

const App2 = () => {
  const [userId, setUserId] = useState(4711);
  return (
    <div>
      <button onClick={() => setUserId((prev) => prev + 1)}>Next!</button>
      <ClassComponentExample userId={userId} />
    </div>
  );
};

// <ClassComponentExample userId={4711} />

export default ClassComponentExample;
