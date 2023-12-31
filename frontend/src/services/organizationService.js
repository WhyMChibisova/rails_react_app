async function fetchAllOrganizations() {
  const response = await fetch("http://localhost:3000/organizations");
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function fetchOrganization(id) {
  const response = await fetch(`http://localhost:3000/organizations/${id}`);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function createOrganization(organizationData) {
  const response = await fetch('http://localhost:3000/organizations', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(organizationData)
  });
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function updateOrganization(id, organizationData) {
  const response = await fetch(`http://localhost:3000/organizations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(organizationData)
  })
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function deleteOrganization(id) {
  const response = await fetch(`http://localhost:3000/organizations/${id}`, {
    method: "DELETE",
  });
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  if (response.status === 204) {
    return null;
  }
  return response.json();
}

async function searchOrganizations(query) {
  const response = await fetch(`http://localhost:3000/search/organizations/?q=${query}`);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function generateContract(id, user_id) {
  const response = await fetch(`http://localhost:3000/organizations/contract/?id=${id}&user_id=${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/docx",
    }
  });
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export { searchOrganizations, createOrganization, updateOrganization, deleteOrganization,  fetchAllOrganizations, fetchOrganization, generateContract };
