/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Box, Image, Text, Flex, Button } from "rebass";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const BicyclesList = () => {
  const [bikes, setBikes] = useState([]);

  const getBicycles = async () => {
    const bikesSnapshot = await getDocs(collection(db, "bikes"));

    setBikes(
      bikesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };

  useEffect(() => {
    getBicycles();
  }, []);

  return (
    <Flex
      flexWrap="wrap"
      sx={{
        p: 2,
        pt: 5,
      }}
    >
      {bikes.slice(0, 3).map((bike) => (
        <Box
          width={600}
          height={550}
          mx="auto"
          mt={5}
          sx={{
            bg: "background",
            borderRadius: 8,
            border: "1px solid #e0e0e0",
          }}
        >
          <Image
            src={bike.imageBicycle}
            sx={{
              borderRadius: 8,
            }}
          />
          <Text p={3} color="primary" fontFamily="monospace" fontSize={24}>
            {bike.model}
            <Text sx={{ color: "green" }}>${bike.price}</Text>
          </Text>

          <Box
            sx={{
              pr: 2,
              width: "100%",
              textAlign: "end",
            }}
          >
            <Button
              sx={{
                bg: "secondary",
                color: "primary",
                cursor: "pointer",
                width: 150,
              }}
            >
              <Text
                sx={{
                  color: "primary",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Add
              </Text>
            </Button>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default BicyclesList;
