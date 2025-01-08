import React from "react";

type RequirementsType = {
  minimum: string; // HTML string for minimum requirements
  recommended: string; // HTML string for recommended requirements
};

type systemRequiermentPropType = {
  requirements: RequirementsType;
};

function SystemRequierment({ requirements }: systemRequiermentPropType) {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">سیستم مورد نیاز</h2>
      <p className="my-8 font-semibold">حداقل سیستم مورد نیاز:</p>
      <div dir="ltr" dangerouslySetInnerHTML={{ __html: requirements.minimum }} />
      <p className="my-8 font-semibold">سیستم پیشنهادی:</p>
      <div dir="ltr" dangerouslySetInnerHTML={{ __html: requirements.recommended }} />
    </div>
  );
}

export default SystemRequierment;
