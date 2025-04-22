export const myViewConfig = {
  version: "1.0.15",
  name: "10x visium human lymph node",
  description: "This demonstrates the View Config for Vitessce.",
  datasets: [
    {
      uid: "visium",
      name: "visium",
      files: [
        {
          fileType: "anndata-cells.zarr",
          url: "http://localhost:9000/V1_Human_Lymph_Node.zarr",
          coordinationValues: {
            obsType: "cell",
            featureType: "gene",
            featureValueType: "transcript count"
          },
          options: {
            obsFeatureMatrix: {
              path: "X"
            },
            featureLabels: {
              path: "var/gene_ids"
            },
            obsEmbedding: [
              {
                path: "obsm/X_umap",
                embeddingType: "UMAP",
                dims: [0, 1]
              },
              {
                path: "obsm/X_pca",
                embeddingType: "PCA",
                dims: [0, 1]
              },
              {
                path: "obsm/X_hvg",
                embeddingType: "HVG",
                dims: [0, 1]
              }
            ]
          }
        },
        {
          fileType: "obsSets.anndata.zarr",
          url: "http://localhost:9000/V1_Human_Lymph_Node.zarr",
          coordinationValues: {
            obsType: "cell",
            obsSetType: "cell-sets"
          },
          options: [
            {
              name: "Cluster",
              path: "obs/clusters"
            }
          ]
        }
      ]
    }
  ],
  coordinationSpace: {
    dataset: {
      A: "visium"
    },
    embeddingType: {
      A: "UMAP",
      B: "PCA",
      C: "HVG"
    },
    embeddingZoom: {
      A: 2.5
    }
  },
  layout: [
    {
      component: "scatterplot",
      coordinationScopes: {
        dataset: "A",
        embeddingType: "A",
        embeddingZoom: "A"
      },
      x: 6,
      y: 0,
      w: 6,
      h: 6
    },
    {
      component: "scatterplot",
      coordinationScopes: {
        dataset: "A",
        embeddingType: "B",
        embeddingZoom: "A"
      },
      x: 0,
      y: 0,
      w: 6,
      h: 6
    },
    {
      component: "heatmap",
      coordinationScopes: {
        dataset: "A",
        embeddingType: "C"
      },
      x: 0,
      y: 6,
      w: 12,
      h: 6
    },
    {
      component: "obsSets",
      coordinationScopes: {
        dataset: "A"
      },
      x: 0,
      y: 12,
      w: 6,
      h: 6
    },
    {
      component: "obsSetSizes",
      coordinationScopes: {
        dataset: "A"
      },
      x: 6,
      y: 12,
      w: 6,
      h: 6
    }
  ],
  initStrategy: "auto"
};
