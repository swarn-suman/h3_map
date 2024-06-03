'use client'

import mapboxgl, { Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from "react";

export default function Home() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0eTI0OCIsImEiOiJjbHdqY3ZqMjYwejc0MmxxbTgyMHR4bGY4In0.5BFu5mzvwrElBnHOhG0P_A';
  
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (map) return;
    const createMap = () => {
      const tempMap = new Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v11",
        center: [-122.3937, 37.7955],
        zoom: 15,
      });

      tempMap.on('load',()=>{
        
        tempMap.addSource('maine',{'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties':{},
            'geometry': {
                'type': 'Polygon',
                
                // These coordinates outline Maine.
                'coordinates': [
                  [
                    [-122.39375417406507,
                      37.79459532906905
                      
                    ],
                    [-122.39311475203088,
                      37.795101407925074
                      
                    ],
                    [-122.39332150452454,
                      37.79577164680074
                      
                    ],
                    [-122.39416768597039,
                      37.79593580302985
                      
                    ],
                    [-122.39480710366193,
                      37.79542972178519
                      
                    ],
                    [-122.39460034425043,
                      37.79475948670009
                      
                    ]
                  ]
                ]
            }
        }
      })
      // Add a new layer to visualize the polygon.
      tempMap.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.5
        }
    });
    // Add a black outline around the polygon.
    tempMap.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'maine',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 3
        }
    });
    })
     
    setMap(tempMap);

    };
    createMap();
  }, []);

  return (
       <main className="flex h-screen w-screen  items-center justify-center">
           <div
              className={`fixed left-0 top-0 w-screen h-screen`}
              id="map"
             
            />

       </main>
  );
}
