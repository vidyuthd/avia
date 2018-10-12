defmodule AdminAppWeb.TemplateApi.ProductController do
  use AdminAppWeb, :controller

  alias Snitch.Data.Model.Product, as: ProductModel
  alias Snitch.Data.Schema.Product, as: ProductSchema
  alias Ecto.Multi
  alias Snitch.Repo

  def update_product(conn, params) do
    response = update_multi(params)
    render(conn, "product.json", %{response: response})
  end

  def update(id, params) do
    with %ProductSchema{} = product <- ProductModel.get(id),
         {:ok, product} <- ProductModel.update(product, params) do
      true
    else
      _ ->
        false
    end
  end

  def update_multi(params) do
    products_id = params["products_id"]
    batch_action = params["batch_action"]

    multi =
      Multi.new()
      |> Multi.run(:products, fn %{products_id: products_id, batch_action: batch_action} ->
        case products_id |> Enum.all?(fn x -> x |> update(batch_action) end) do
          true -> {:ok, :success}
          false -> {:error, :faild}
        end
      end)

    Repo.transaction(multi)
  end
end
