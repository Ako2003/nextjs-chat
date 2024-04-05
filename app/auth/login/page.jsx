"use client"
import Avatar from "@/components/Avatar.jsx";
import {Card, CardBody, Input, Button, CardHeader, Divider, CardFooter} from "@nextui-org/react";
import React, { useEffect, useState } from 'react'

export default function Login() {

  const [image, setImage] = useState(null);

  const handleImage = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  const inputs = [
    { label: "Name", type: "text" },
    { label: "Surname", type: "text" },
    { label: "Email", type: "email" },
    { label: "Username", type: "text" },
  ];
  return (
    <section className="reddit mx-5">
      <div className='flex justify-center items-center h-screen'>
        <Card>
          <CardHeader className="flex-col items-center">
            <h1 className="p-3 text-xl font-bold">Login To Your Account</h1>
          </CardHeader>
          <Divider />
          <form>
            <CardBody>
              <div className="flex items-center justify-between gap-4 mx-3 my-5">
                <Avatar image={image} setImage={setImage}/>
                <p>OR</p>
                <label htmlFor="input-image" className="bg-[#12A150] text-white p-3 rounded-xl cursor-pointer">Upload Your Avatar</label>
                <input 
                  type="file" 
                  accept="image/png, image/jpeg" 
                  id="input-image" 
                  className="hidden"
                  onChange={e => {
                    const file = e.target.files[0];
                    if (file) {
                      console.log(URL.createObjectURL(file));
                      handleImage((file));
                    }
                  }}
                />
              </div>
              <div className="grid gap-4 grid-cols-2">
                {inputs.map((input, index) => {
                  return (
                    <div className="flex flex-col" key={index}>
                      <label>{input.label}<span className="text-[red]">*</span></label>
                      <input 
                        className="border border-gray-300 p-2 rounded-md "
                        required
                      />
                    </div>
                  )
                })}
              </div>
            </CardBody>
          <CardFooter>
            <Button type="submit" className="flex flex-1" color="primary">
              Button
            </Button>
          </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  )
}
