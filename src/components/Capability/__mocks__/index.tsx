// Import this named export into your test file:
const mock = jest.fn().mockImplementation(() => {
    return () => <div>Mock Capability</div>;
});

export default mock;
