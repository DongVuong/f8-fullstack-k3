import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
} from "@chakra-ui/slider";
import { Tooltip } from "@chakra-ui/react";
function InputRange({ handleChangeNumber }) {
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <Slider
      width="98.5%"
      id="slider"
      defaultValue={1}
      min={1}
      max={2048}
      colorScheme="teal"
      onChange={(v) => {
        handleChangeNumber(v);
        setSliderValue(v);
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark color="#319795" value={0} mt="2" ml="-2" fontSize="lg">
        0
      </SliderMark>
      <SliderMark color="#319795" value={512} mt="2" ml="-2" fontSize="lg">
        512
      </SliderMark>
      <SliderMark color="#319795" value={1024} mt="2" ml="-2" fontSize="lg">
        1024
      </SliderMark>
      <SliderMark color="#319795" value={1536} mt="2" ml="-2" fontSize="lg">
        1536
      </SliderMark>
      <SliderMark color="#319795" value={2048} mt="2" ml="-2" fontSize="lg">
        2048
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}

export default InputRange;
