// Import customer-related service functions from the service layer
const {
  checkIfCustomerExists,
  createCustomer,
  getSingleCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  totalNumberOfCustomers,
  searchedCustomers,
} = require("../services/customer.service");






// *** A function to create a new customer *** //
async function createCustomerController(req, res, next) {
  const { customer_email } = req.body;

  try {
    // Check if the email is already associated with another customer
    const customerExists = await checkIfCustomerExists(customer_email);

    if (customerExists) {
      return res.status(400).json({
        msg: "This email address is already associated with another customer!",
      });
    }

    // Create a new customer using the request body data
    const customerData = req.body;
    const customer = await createCustomer(customerData);

    if (!customer) {
      return res.status(400).json({
        error: "Failed to add the customer!",
      });
    }

    // Return success response with created customer data
    return res.status(200).json({
      status: "Customer added successfully!",
      customer,
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}





// *** Controller to retrieve all customers *** //
async function getAllCustomersController(req, res, next) {
  const { offset } = req.params;

  try {
    // Fetch customers from the database using the offset
    const customers = await getAllCustomers(offset);

    if (!customers) {
      return res.status(400).json({
        error: "Failed to get all customers!",
      });
    }

    // Return success response with the list of customers
    return res.status(200).json({
      status: "Customers retrieved successfully!",
      customers,
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}







// *** Controller to retrieve a single customer by ID *** //
async function getSingleCustomerController(req, res, next) {
  const id = req.params.customer_id;

  try {
    // Fetch the customer with the given ID
    const singleCustomer = await getSingleCustomer(id);

    if (!singleCustomer) {
      return res.status(400).json({
        error: "Failed to get customer!",
      });
    }

    // Return success response with the customer data
    return res.status(200).json({
      status: "Customer retrieved successfully!",
      customer: singleCustomer,
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}





// *** Controller to update customer data *** //
async function updateCustomerController(req, res, next) {
  try {
    // Update the customer using the request body data
    const updateResult = await updateCustomer(req.body);

    if (!updateResult) {
      return res.status(400).json({
        error: "Failed to update customer!",
      });
    }

    // Return success response with the update result
    return res.status(200).json({
      status: "Customer successfully updated!",
      updateResult,
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}







// *** a controller to delete a customer *** //
async function deleteCustomerController(req, res, next) {
  try {
    const { customer_id } = req.params;

    // Ensure the customer ID is provided
    if (!customer_id) {
      return res.status(400).json({ error: "Customer ID is required" });
    }

    // Delete the customer with the given ID
    const deleteResult = await deleteCustomer(customer_id);

    if (!deleteResult) {
      return res.status(400).json({
        error: "Delete incomplete!",
      });
    }

    // Return success response after deletion
    return res.status(200).json({
      status: "Customer successfully deleted!",
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}






// *** a controller to get the total number of customers *** //
async function totalNCustomers(req, res) {
  try {
    // Retrieve the total customer count
    const customers = await totalNumberOfCustomers();

    if (!customers) {
      return res.status(400).json({
        error: "Failed to get all customers!",
      });
    }

    // Return success response with the customer count
    return res.status(200).json({
      status: "Customers retrieved successfully!",
      customers,
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}





// *** Controller to search for customers by a credential (e.g., name or email) *** //
async function searchedCustomerController(req, res) {
  const { credential } = req.params;

  try {
    // Search for customers using the provided credential
    const customers = await searchedCustomers(credential);

    if (!customers) {
      return res.status(400).json({
        error: "Failed to get all customers!",
      });
    }

    // Return success response with search results
    return res.status(200).json({
      status: "Customers retrieved successfully!",
      customers,
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}





// Export all controllers to be used in routing or elsewhere
module.exports = {
  createCustomerController,
  getAllCustomersController,
  getSingleCustomerController,
  updateCustomerController,
  deleteCustomerController,
  totalNCustomers,
  searchedCustomerController,
};
