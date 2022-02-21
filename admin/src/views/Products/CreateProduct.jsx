import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CreateProduct = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Link className="btn btn-dark btn-sm mt-4" to="/products">
        Back
      </Link>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>Create Product</h1>
      </div>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter Product Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="Enter Product Description"
            type="textarea"
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            id="price"
            name="price"
            type="number"
            placeholder="Enter Product Price"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="stock">Stock</Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            placeholder="Enter Product Stock"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="expire">Expire</Label>
          <Input
            id="expire"
            name="expire"
            type="date"
            placeholder="Enter Product expire"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight</Label>
          <Input
            id="weight"
            name="weight"
            type="number"
            placeholder="Enter Product Weight"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input id="category" name="category" type="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="brand">Brand</Label>
          <Input
            id="brand"
            name="brand"
            type="text"
            placeholder="Enter Product Brand"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="condition">Condition</Label>
          <Input
            id="condition"
            name="condition"
            type="text"
            placeholder="Enter Product Condition"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="totalSold">Total Sold</Label>
          <Input
            id="totalSold"
            name="totalSold"
            type="number"
            placeholder="Enter Product Total Sold"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            placeholder="Enter Product Rating"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="views">Views</Label>
          <Input
            id="views"
            name="views"
            type="number"
            placeholder="Enter Product Views"
          ></Input>
        </FormGroup>
        <Button className="btn btn-outline">Create</Button>
      </Form>
    </main>
  );
};

export default CreateProduct;
