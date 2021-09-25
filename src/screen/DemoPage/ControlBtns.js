import React from "react";
import { View, StyleSheet } from "react-native";
import {
  create_student_with_fetch,
  create_student_with_axios,
  read_student_with_fetch,
  read_student_with_axios,
  update_student_with_fetch,
  update_student_with_axios,
  delete_student_with_fetch,
  delete_student_with_axios,
} from "../../_services/api.services";
import { Button, Stack } from "native-base";
import faker from "faker";

const styles = StyleSheet.create(
    {
        axiosBtn: {
            backgroundColor: "#5a29e4"
        },
        fetchBtn: {
            backgroundColor: "#000",
            color: "#fff"
        }
    }
)

const ControlBtns = ({ data, setData }) => {
  const btnEntriesFetch = [
    {
      title: "create(fetch)",
      onClick: async () => {
        await create_student_with_fetch(getRandomName());
        await updateData();
      },
    },
    {
      title: "read(fetch)",
      onClick: async () => {
        const data = await read_student_with_fetch();
        setData(data);
      },
    },
    {
      title: "update(fetch)",
      onClick: async () => {
        await update_student_with_fetch(getRandomId(), getRandomName());
        await updateData();
      },
    },
    {
      title: "delete(fetch)",
      onClick: async () => {
        await delete_student_with_fetch(getRandomId());
        await updateData();
      },
    },
  ];

  const btnEntriesaAxios = [
    {
      title: "create(axios)",
      onClick: async () => {
        await create_student_with_axios(getRandomName());
        await updateData();
      },
    },
    {
      title: "read(axios)",
      onClick: async () => {
        const data = await read_student_with_axios();
        setData(data);
      },
    },
    {
      title: "update(axios)",
      onClick: async () => {
        await update_student_with_axios(getRandomId(), getRandomName());
        await updateData();
      },
    },
    {
      title: "delete(axios)",
      onClick: async (id) => {
        await delete_student_with_axios(getRandomId());
        await updateData();
      },
    },
  ];

  const getRandomId = () => {
    const idx = Math.floor(Math.random() * data.length);
    return data[idx].id;
  };
  const getRandomName = () => faker.name.firstName();


  const updateData = async () => {
    const data = await read_student_with_axios();
    setData(data);
  };

  return (
    <Stack space={3}>
        <Button.Group
          mx={{
            base: "auto",
            md: 0,
          }}
        >
          {btnEntriesaAxios.map(({onClick: onPress, title }) => (
          <Button onPress={onPress} style={styles.axiosBtn}>{title}</Button>
      ))}
        </Button.Group>

        <Button.Group
          mx={{
            base: "auto",
            md: 0,
          }}
        >
          {btnEntriesFetch.map(({onClick: onPress, title }) => (
          <Button onPress={onPress} style={styles.fetchBtn}>{title}</Button>
      ))}
        </Button.Group>
    </Stack>
  );
};

export default ControlBtns;
