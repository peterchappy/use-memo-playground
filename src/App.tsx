import { useState } from "react";
import "./App.css";
import { Constant } from "./Constant";
import { Linear } from "./Linear";
import { Quadratic } from "./Quadratic";

const MAX_N = 100_000;

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
  const hundredThousand = data;

  return (
    <>
      <div className="perf-table">
        <div style={{ gridColumn: "span 3" }}>
          <button onClick={handleRerender}>Re-render</button>
        </div>
        <div style={{ gridColumn: "span 3" }}>
          <button onClick={handleDataReset}>Reset</button>
        </div>
        {/* header */}
        <div className="perf-table-item" />
        <div className="perf-table-item">10 item</div>
        <div className="perf-table-item">100 items</div>
        <div className="perf-table-item">1,000 items</div>
        <div className="perf-table-item">10,0000 items</div>
        <div className="perf-table-item">100,0000 items</div>

        {/* Constant */}
        <p className="perf-table-item">O(1)</p>
        <div className="perf-table-item">
          <Constant data={ten} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Constant data={hundred} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Constant data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Constant data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Constant data={hundredThousand} rerenderCount={triggerRerender} />
        </div>

        {/* Linear */}
        <p className="perf-table-item">O(n)</p>
        <div className="perf-table-item">
          <Linear data={ten} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linear data={hundred} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linear data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linear data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Linear data={hundredThousand} rerenderCount={triggerRerender} />
        </div>

        {/* Quadratic */}
        <p className="perf-table-item">O(n^2)</p>
        <div className="perf-table-item">
          <Quadratic data={ten} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Quadratic data={hundred} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Quadratic data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Quadratic data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <Quadratic data={hundredThousand} rerenderCount={triggerRerender} />
        </div>
      </div>
    </>
  );
}

export default App;
