import React from "react";

function SystemRequierment() {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">سیستم مورد نیاز</h2>
      <p className="my-8 font-semibold">حداقل سیستم مورد نیاز:</p>
      <div dir="ltr">
        <strong>Minimum:</strong>
        <br />
        <ul className="bb_ul\">
          <li>
            Requires a 64-bit processor and operating system
            <br />
          </li>
          <li>
            <strong>OS:</strong> Windows 10 64-bit
            <br />
          </li>
          <li>
            <strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD
            Ryzen 3 1200 (4 core 3.1 GHz)
            <br />
          </li>
          <li>
            <strong>Memory:</strong> 8 GB RAM
            <br />
          </li>
          <li>
            <strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4
            GB)
            <br />
          </li>
          <li>
            <strong>DirectX:</strong> Version 11
            <br />
          </li>
          <li>
            <strong>Storage:</strong> 70 GB available space
            <br />
          </li>
          <li>
            <strong>Additional Notes:</strong> DirectX feature level 11_1
            required
          </li>
        </ul>
      </div>
      <p className="my-8 font-semibold">سیستم پیشنهادی:</p>
      <div dir="ltr">
        <strong>Recommended:</strong>
        <br />
        <ul className="bb_ul\">
          <li>
            Requires a 64-bit processor and operating system
            <br />
          </li>
          <li>
            <strong>OS:</strong> Windows 10 64-bit
            <br />
          </li>
          <li>
            <strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD
            Ryzen 5 2400 G (4 core 3.6 GHz)
            <br />
          </li>
          <li>
            <strong>Memory:</strong> 8 GB RAM
            <br />
          </li>
          <li>
            <strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4
            GB)
            <br />
          </li>
          <li>
            <strong>DirectX:</strong> Version 11
            <br />
          </li>
          <li>
            <strong>Storage:</strong> 70 GB available space
            <br />
          </li>
          <li>
            <strong>Additional Notes:</strong> DirectX feature level 11_1
            required
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SystemRequierment;
