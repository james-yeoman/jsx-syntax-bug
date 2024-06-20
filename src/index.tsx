import React from "react";

type FooProps<T> = {
  genericProp: T
}

export const Foo = <T = string,>({ genericProp }: FooProps<T>) => {
  return <div>{String(genericProp)}</div>
}

function App() {
  return (
    <Foo genericProp={2} />
  )
}

export default App
