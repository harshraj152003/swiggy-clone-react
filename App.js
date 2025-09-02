/*
CREATE THIS TYPE OF STRUCTURE USING REACT
<div id="root">
    <div id="child">
        <h1>I'm H1 tag</h1>
        <h2>I'm H2 tag</h2>
    </div>
</div>
*/


const heading1 = React.createElement(
    "h1",
    { id: "h1", },
    "I'm H1 tag"
);

const heading2 = React.createElement(
    "h2",
    { id: "h2", },
    "I'm H2 tag"
);

const childContainer = React.createElement("div", {
    id: "child",
},[heading1,heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(childContainer);