import { Stack, Box, Text, Center } from "native-base";
import React, { useState } from "react";
import JSONTree from "react-native-json-tree";
import ControlBtns from "./ControlBtns";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../store/slices/dataSlice";

function Index() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const onChangeData = (data) => dispatch(setData(data));
  return (
    <Stack space={3} margin={3}>
      <Center>
        <Text bold fontSize="2xl" cent>
          demo~
        </Text>
      </Center>

      <Box borderRadius="md" bg="rgb(0, 43, 54)" overflow="hidden" padding={2}>
        <JSONTree data={data} shouldExpandNode={() => true} hideRoot />
      </Box>
      <ControlBtns
        data={data}
        setData={onChangeData}
        hideRoot
      />
    </Stack>
  );
}

export default Index;
