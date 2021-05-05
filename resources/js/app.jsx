import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

const ListHep = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/hepcoin").then((res) => {
            res.json().then(setList);
        });
    }, []);
    return list.map(({ id, name, coin }) => (
        <div key={id}>
            {id} - {name} - {coin}
        </div>
    ));
};

ReactDom.render(
    <div>
        Hello
        <ListHep />
    </div>,
    document.getElementById("root")
);
