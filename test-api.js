async function testAPI() {
  try {
    console.log('--- Testing API Endpoints ---');
    
    // 1. Create Person
    console.log('\n1. Creating Person...');
    const createRes = await fetch('http://localhost:3000/person', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: 'John Doe',
        Age: 30,
        Gender: 'Male',
        MobileNumber: '1234567890'
      })
    });
    const createdPerson = await createRes.json();
    console.log('Created:', createdPerson);
    
    if (!createdPerson._id) throw new Error('Failed to create person');
    
    // 2. Get Persons
    console.log('\n2. Getting all persons...');
    const getRes = await fetch('http://localhost:3000/person');
    const persons = await getRes.json();
    console.log('Persons list size:', persons.length);
    if (!Array.isArray(persons)) throw new Error('Expected array');
    
    // 3. Update Person
    console.log('\n3. Updating person...');
    const updateRes = await fetch(`http://localhost:3000/person/${createdPerson._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Age: 31 })
    });
    const updatedPerson = await updateRes.json();
    console.log('Updated Age:', updatedPerson.Age);
    if (updatedPerson.Age !== 31) throw new Error('Update failed');
    
    // 4. Delete Person
    console.log('\n4. Deleting person...');
    const deleteRes = await fetch(`http://localhost:3000/person/${createdPerson._id}`, {
      method: 'DELETE'
    });
    const deleteMessage = await deleteRes.json();
    console.log('Delete result:', deleteMessage);
    
    console.log('\n✅ All API tests passed successfully!');
  } catch (err) {
    console.error('\n❌ Test failed:', err.message);
  } finally {
    process.exit(0);
  }
}

testAPI();
