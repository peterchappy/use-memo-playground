import { useState } from "react";
import "./App.css";
import { Constant, MemoConstant } from "./Constant";
import { Linear, MemoLinear } from "./Linear";
import { MemoQuadratic, Quadratic } from "./Quadratic";
import { Linearithmic, MemoLinearithmic } from "./Linearithmic";

const MAX_N = 100_000;

function App() {
  const [triggerRerender, setTriggerRerender] = useState(0);

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

  const thousand = data.slice(0, 1000);
  const tenThousand = data.slice(0, 10000);
  const hundredThousand = data;

  return (
    <div className="perf-root">
      <button onClick={handleRerender}>Re-render</button>
      <button onClick={handleDataReset}>Reset</button>

      <h1>Without Memo</h1>
      <div className="perf-table">
        {/* header */}
        <div className="perf-table-item" />
        <div className="perf-table-item">1,000 items</div>
        <div className="perf-table-item">10,0000 items</div>
        <div className="perf-table-item">100,0000 items</div>

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
      </div>

      <h1>With Memo</h1>
      <div className="perf-table">
        {/* header */}
        <div className="perf-table-item" />
        <div className="perf-table-item">1,000 items</div>
        <div className="perf-table-item">10,0000 items</div>
        <div className="perf-table-item">100,0000 items</div>

        {/* Constant */}
        <p className="perf-table-item">O(1)</p>

        <div className="perf-table-item">
          <MemoConstant data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoConstant data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoConstant data={hundredThousand} rerenderCount={triggerRerender} />
        </div>

        {/* Linear */}
        <p className="perf-table-item">O(n)</p>
        <div className="perf-table-item">
          <MemoLinear data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoLinear data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoLinear data={hundredThousand} rerenderCount={triggerRerender} />
        </div>

        <p className="perf-table-item">O(nlogn)</p>
        <div className="perf-table-item">
          <MemoLinearithmic data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoLinearithmic data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoLinearithmic
            data={hundredThousand}
            rerenderCount={triggerRerender}
          />
        </div>

        {/* Quadratic */}
        <p className="perf-table-item">O(n^2)</p>
        <div className="perf-table-item">
          <MemoQuadratic data={thousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoQuadratic data={tenThousand} rerenderCount={triggerRerender} />
        </div>
        <div className="perf-table-item">
          <MemoQuadratic data={hundredThousand} rerenderCount={triggerRerender} />
        </div>
      </div>

    </div>
  );
}

export default App;
