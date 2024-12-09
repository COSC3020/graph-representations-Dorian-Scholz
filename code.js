function convertToAdjList(adjMatrix)
{
    return adjMatrix.map((row, index) => 
        row.reduce((adjList, value, neighborIndex) => 
        {
            if (value === 1) adjList.push(neighborIndex);
            return adjList;
        }, [])
    );
}
