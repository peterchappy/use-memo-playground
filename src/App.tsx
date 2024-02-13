import { useState } from "react";
import "./App.css";
import { Constant } from "./Constant";
import { Linear } from "./Linear";
import { Quadratic } from "./Quadratic";
import { Linearithmic } from "./Linearithmic";

const MAX_N = 1_000_000;

type PerfType = "linear" | "constant" | "quadratic";

type PerfMetrics = Record<
  PerfType,
  Array<{ duration: number; render: number }>
>;

function App() {
  const [triggerRerender, setTriggerRerender] = useState(0);
  const [perfMetrics, setPerfMetrics] = useState({
    constant: [],
    linear: [],
    quadratic: [],
  });

  const [data, setData] = useState(
    Array.from({ length: MAX_N }, () => Math.floor(Math.random() * MAX_N)),
  );

  const handleRerender = () => {
    setTriggerRerender((x) => x + 1);
  };

  const handleDataReset = () => {
    setData(
      Array.from({ length: MAX_N }, () => Math.floor(Math.random() * MAX_N)),
    );
  };

  const ten = data.slice(0, 10);
  const hundred = data.slice(0, 100);
  const thousand = data.slice(0, 1000);
  const tenThousand = data.slice(0, 10000);
  const hundredThousand = data.slice(0, 100_000);
  const million = data;

  return (
    <>
      <div className="perf-table">
        <div style={{ gridColumn: "1 / -1" }}>
          <button onClick={handleRerender}>Re-render</button>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <button onClick={handleDataReset}>Reset</button>
        </div>
        {/* header */}
        <div className="perf-table-item" />
        <div className="perf-table-item">1,000 items</div>
        <div className="perf-table-item">10,0000 items</div>
        <div className="perf-table-item">100,0000 items</div>
        <div className="perf-table-item">1,000,0000 items</div>

        {/* Constant */}
        <p className="perf-table-item">O(1)</p>

        <div className="perf-table-item">
          <Constant data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Constant data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Constant data={hundredThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Constant data={million} rerenderCount={triggerRerender} />
        </div>

        {/* Linear */}
        <p className="perf-table-item">O(n)</p>
        <div className="perf-table-item">
          <Linear data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linear data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linear data={hundredThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linear data={million} rerenderCount={triggerRerender} />
        </div>

        <p className="perf-table-item">O(nlogn)</p>
        <div className="perf-table-item">
          <Linearithmic data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linearithmic data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linearithmic
            data={hundredThousand}
            rerenderCount={triggerRerender}
          />
        </div>
        <div className="perf-table-item">
          {/* <Linearithmic data={million} rerenderCount={triggerRerender} /> */}
          <p>N/A</p>
        </div>

        {/* Quadratic */}
        <p className="perf-table-item">O(n^2)</p>
        <div className="perf-table-item">
          <Quadratic data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Quadratic data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Quadratic data={hundredThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          {/* <Quadratic data={million} rerenderCount={triggerRerender} /> */}
          <p>N/A</p>
        </div>
      </div>
    </>
  );
}

export default App;
