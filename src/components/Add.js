import axios from "axios";
import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [categories, setCategories] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  // console.log( name, price, categories, email, description);
  const [avatar, setAvatar] = useState("Categories");
  const navigate=useNavigate()
  const handleChange = (event) => {
    setCategories(event.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_TOKEN);
    const uploadObj = {
      name: name,
      price: price,
      category: categories,
      description: description,
      avatar: avatar,
      developerEmail: email,
    };
    console.log(uploadObj);
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    };
    axios
      .post(
        "https://upayments-studycase-api.herokuapp.com/api/products",
        uploadObj,
        config
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      setName("");
      setAvatar("");
      setCategories("")
      setprice("")
      setEmail("");
      setDescription("")
    navigate("/")
  };
  return (
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Products
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder={price}
                        onChange={(e) => setprice(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Avatar
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="string"
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <FormControl variant="standard" sx={{ m: 1, width: "140px" }}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "20px",
                      lineHeight: "24px",
                    }}
                  >
                    Categories
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={categories}
                    onChange={handleChange}
                    label="Age"
                    placeholder="All"
                  >
                    <MenuItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        lineHeight: "10px",
                      }}
                      value="clothing"
                    >
                      Clothing
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        lineHeight: "10px",
                      }}
                      value="Electronics"
                    >
                      Electronics
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        lineHeight: "10px",
                      }}
                      value="Furniture"
                    >
                      Furniture
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        lineHeight: "10px",
                      }}
                      value="Hobby"
                    >
                      Hobby
                    </MenuItem>
                    <MenuItem
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        lineHeight: "10px",
                      }}
                      value="Accessories"
                    >
                      Accessories
                    </MenuItem>
                  </Select>
                </FormControl>

                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="Email"
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>



                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  onClick={onClickHandler}
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
