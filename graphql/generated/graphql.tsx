import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type Category = {
  __typename?: 'Category';
  filters: Array<Maybe<CategoryFilter>>;
  id: Scalars['String'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  __typename?: 'CategoryFilter';
  expectedRange: Array<Maybe<Scalars['String']>>;
  expectedStrings: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
  isMultipleChoice: Scalars['Boolean'];
  isSelectableByUser: Scalars['Boolean'];
  name: Scalars['String'];
  values: Array<Maybe<FilterValue>>;
};

export type DigitalStack = {
  __typename?: 'DigitalStack';
  categories: Array<Maybe<Category>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type FilterValue = {
  __typename?: 'FilterValue';
  categoryFilterId: Scalars['String'];
  id: Scalars['ID'];
  numberValue?: Maybe<Scalars['Int']>;
  productId: Scalars['String'];
  stringValue?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateCategory?: Maybe<Category>;
  CreateCategoryFilter?: Maybe<CategoryFilter>;
  CreateDigitalStack?: Maybe<DigitalStack>;
  CreateFilterValue?: Maybe<FilterValue>;
  CreateFilterValues: Array<Maybe<FilterValue>>;
  CreateProduct?: Maybe<Product>;
  DeleteCategory?: Maybe<Scalars['String']>;
  DeleteCategoryFilter?: Maybe<CategoryFilter>;
  DeleteDigitalStack?: Maybe<Scalars['String']>;
  DeleteProduct?: Maybe<Product>;
  LoginByPass?: Maybe<User>;
  LoginBySms?: Maybe<User>;
  SendForgetPassCode?: Maybe<Sms>;
  SendLoginCode?: Maybe<Sms>;
  SetPassByOldPass?: Maybe<User>;
  SetPassBySms?: Maybe<User>;
  UpdateCategory?: Maybe<Category>;
  UpdateCategoryFilter?: Maybe<CategoryFilter>;
  UpdateDigitalStack?: Maybe<DigitalStack>;
  UpdateProduct?: Maybe<Product>;
  removeFilterValue?: Maybe<FilterValue>;
  updateFilterValue?: Maybe<FilterValue>;
  updateFilterValues: Array<Maybe<FilterValue>>;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCategoryFilterArgs = {
  categoryId: Scalars['String'];
  expectedRange?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expectedStrings?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filterValueIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isMultipleChoice: Scalars['Boolean'];
  isSelectableByUser: Scalars['Boolean'];
  name: Scalars['String'];
  unit?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDigitalStackArgs = {
  categories: Array<InputMaybe<Scalars['String']>>;
  name: Scalars['String'];
};


export type MutationCreateFilterValueArgs = {
  categoryFilterId: Scalars['String'];
  numberValue?: InputMaybe<Scalars['Int']>;
  productId: Scalars['String'];
  stringValue?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};


export type MutationCreateFilterValuesArgs = {
  categoryFilterIds: Array<InputMaybe<Scalars['String']>>;
  numberValues: Array<InputMaybe<Scalars['Int']>>;
  productId: Scalars['String'];
  stringValues: Array<InputMaybe<Scalars['String']>>;
  types: Array<InputMaybe<Scalars['String']>>;
};


export type MutationCreateProductArgs = {
  attributes: Scalars['JSON'];
  categories: Array<InputMaybe<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  digitalStackId: Scalars['String'];
  imageCount: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['String'];
  quantity: Scalars['Int'];
  tags: Array<InputMaybe<Scalars['String']>>;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['String'];
};


export type MutationDeleteCategoryFilterArgs = {
  categoryFilterId: Scalars['String'];
};


export type MutationDeleteDigitalStackArgs = {
  stackId: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type MutationLoginByPassArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationLoginBySmsArgs = {
  code: Scalars['String'];
  phoneNumber: Scalars['String'];
  smsId: Scalars['String'];
};


export type MutationSendForgetPassCodeArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationSendLoginCodeArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationSetPassByOldPassArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationSetPassBySmsArgs = {
  code: Scalars['String'];
  newPassword: Scalars['String'];
  phoneNumber: Scalars['String'];
  smsId: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationUpdateCategoryFilterArgs = {
  categoryFilterId: Scalars['String'];
  expectedRange?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expectedStrings?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isMultipleChoice?: InputMaybe<Scalars['Boolean']>;
  isSelectableByUser?: InputMaybe<Scalars['Boolean']>;
  mustAddValuesId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mustRemoveValuesId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  unit?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDigitalStackArgs = {
  categories: Array<InputMaybe<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  stackId?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  attributes?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  mustRemoveCats?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mustRemoveUrls?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mustaddCats?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  newImagesCount?: InputMaybe<Scalars['Int']>;
  newThumbnail?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  quantity?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationRemoveFilterValueArgs = {
  categoryFilterId: Scalars['String'];
};


export type MutationUpdateFilterValueArgs = {
  filterValueId: Scalars['String'];
  numberValue?: InputMaybe<Scalars['Int']>;
  stringValue?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateFilterValuesArgs = {
  filterValueIds: Array<InputMaybe<Scalars['String']>>;
  numberValues: Array<InputMaybe<Scalars['Int']>>;
  stringValues: Array<InputMaybe<Scalars['String']>>;
};

export type Product = {
  __typename?: 'Product';
  attributes: Scalars['JSON'];
  categories: Array<Maybe<Category>>;
  description?: Maybe<Scalars['String']>;
  digitalStackId: Scalars['String'];
  id: Scalars['String'];
  imagesUrl: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['String'];
  quantity: Scalars['Int'];
  tags: Array<Maybe<Scalars['String']>>;
  thumbnailUrl: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  GetAllDigitalStacks?: Maybe<Array<Maybe<DigitalStack>>>;
  GetCategories: Array<Maybe<Category>>;
  GetCategory?: Maybe<Category>;
  GetUserDigitalStack?: Maybe<DigitalStack>;
  GetUserDigitalStacks: Array<Maybe<DigitalStack>>;
};


export type QueryGetAllDigitalStacksArgs = {
  digitalStackId: Scalars['String'];
};


export type QueryGetCategoriesArgs = {
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetCategoryArgs = {
  categoryId: Scalars['String'];
};


export type QueryGetUserDigitalStackArgs = {
  digitalStackId: Scalars['String'];
};

export type Sms = {
  __typename?: 'Sms';
  expireDate: Scalars['DateTime'];
  id: Scalars['ID'];
  phonenumber: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  isDocumentsVerified: Scalars['Boolean'];
  isPhoneVerified: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
};

export type CreateDigitalStackMutationVariables = Exact<{
  name: Scalars['String'];
  categories: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type CreateDigitalStackMutation = { __typename?: 'Mutation', CreateDigitalStack?: { __typename?: 'DigitalStack', id: string, name: string, userId: string } | null };

export type GetUserDigitalStacksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDigitalStacksQuery = { __typename?: 'Query', GetUserDigitalStacks: Array<{ __typename?: 'DigitalStack', id: string, name: string, userId: string } | null> };

export type CreateProductMutationVariables = Exact<{
  digitalStackId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
  quantity: Scalars['Int'];
  categories: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  imageCount: Scalars['Int'];
  tags: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  attributes: Scalars['JSON'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', CreateProduct?: { __typename?: 'Product', id: string, name: string, digitalStackId: string, description?: string | null, price: string, quantity: number, thumbnailUrl: string, imagesUrl: Array<string | null>, tags: Array<string | null>, attributes: any, categories: Array<{ __typename?: 'Category', filters: Array<{ __typename?: 'CategoryFilter', id: string, isMultipleChoice: boolean, isSelectableByUser: boolean, name: string, values: Array<{ __typename?: 'FilterValue', categoryFilterId: string, id: string, numberValue?: number | null, productId: string, stringValue?: string | null, type: string } | null> } | null> } | null> } | null };

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', CreateCategory?: { __typename?: 'Category', id: string, name: string, parentId?: string | null, filters: Array<{ __typename?: 'CategoryFilter', id: string, isMultipleChoice: boolean, isSelectableByUser: boolean, name: string, values: Array<{ __typename?: 'FilterValue', categoryFilterId: string, id: string, numberValue?: number | null, productId: string, stringValue?: string | null, type: string } | null> } | null> } | null };

export type GetCategoryQueryVariables = Exact<{
  categoryId: Scalars['String'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', GetCategory?: { __typename?: 'Category', id: string, name: string, parentId?: string | null, filters: Array<{ __typename?: 'CategoryFilter', id: string, isMultipleChoice: boolean, isSelectableByUser: boolean, name: string, values: Array<{ __typename?: 'FilterValue', categoryFilterId: string, id: string, numberValue?: number | null, productId: string, stringValue?: string | null, type: string } | null> } | null> } | null };

export type GetCategoriesWithoutFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesWithoutFilterQuery = { __typename?: 'Query', GetCategories: Array<{ __typename?: 'Category', id: string, name: string, parentId?: string | null } | null> };

export type GetFiltersQueryVariables = Exact<{
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetFiltersQuery = { __typename?: 'Query', GetCategories: Array<{ __typename?: 'Category', name: string, id: string, filters: Array<{ __typename?: 'CategoryFilter', expectedRange: Array<string | null>, expectedStrings: Array<string | null>, id: string, isMultipleChoice: boolean, isSelectableByUser: boolean, name: string, values: Array<{ __typename?: 'FilterValue', categoryFilterId: string, id: string, numberValue?: number | null, productId: string, stringValue?: string | null, type: string } | null> } | null> } | null> };

export type CreateFilterValueMutationVariables = Exact<{
  categoryFilterId: Scalars['String'];
  productId: Scalars['String'];
  type: Scalars['String'];
  stringValue?: InputMaybe<Scalars['String']>;
  numberValue?: InputMaybe<Scalars['Int']>;
}>;


export type CreateFilterValueMutation = { __typename?: 'Mutation', CreateFilterValue?: { __typename?: 'FilterValue', id: string, stringValue?: string | null, numberValue?: number | null, type: string, categoryFilterId: string, productId: string } | null };

export type LoginBySmsMutationVariables = Exact<{
  smsId: Scalars['String'];
  code: Scalars['String'];
  phoneNumber: Scalars['String'];
}>;


export type LoginBySmsMutation = { __typename?: 'Mutation', LoginBySms?: { __typename?: 'User', id: string, phoneNumber: string, isPhoneVerified: boolean, isDocumentsVerified: boolean } | null };

export type SendLoginCodeMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type SendLoginCodeMutation = { __typename?: 'Mutation', SendLoginCode?: { __typename?: 'Sms', id: string, phonenumber: string, expireDate: any } | null };

export type LoginByPassMutationVariables = Exact<{
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginByPassMutation = { __typename?: 'Mutation', LoginByPass?: { __typename?: 'User', id: string, phoneNumber: string, isPhoneVerified: boolean, isDocumentsVerified: boolean } | null };

export type SendForgetPassCodeMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type SendForgetPassCodeMutation = { __typename?: 'Mutation', SendForgetPassCode?: { __typename?: 'Sms', id: string, phonenumber: string, expireDate: any } | null };


export const CreateDigitalStackDocument = gql`
    mutation CreateDigitalStack($name: String!, $categories: [String]!) {
  CreateDigitalStack(name: $name, categories: $categories) {
    id
    name
    userId
  }
}
    `;
export type CreateDigitalStackMutationFn = Apollo.MutationFunction<CreateDigitalStackMutation, CreateDigitalStackMutationVariables>;

/**
 * __useCreateDigitalStackMutation__
 *
 * To run a mutation, you first call `useCreateDigitalStackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDigitalStackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDigitalStackMutation, { data, loading, error }] = useCreateDigitalStackMutation({
 *   variables: {
 *      name: // value for 'name'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useCreateDigitalStackMutation(baseOptions?: Apollo.MutationHookOptions<CreateDigitalStackMutation, CreateDigitalStackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDigitalStackMutation, CreateDigitalStackMutationVariables>(CreateDigitalStackDocument, options);
      }
export type CreateDigitalStackMutationHookResult = ReturnType<typeof useCreateDigitalStackMutation>;
export type CreateDigitalStackMutationResult = Apollo.MutationResult<CreateDigitalStackMutation>;
export type CreateDigitalStackMutationOptions = Apollo.BaseMutationOptions<CreateDigitalStackMutation, CreateDigitalStackMutationVariables>;
export const GetUserDigitalStacksDocument = gql`
    query GetUserDigitalStacks {
  GetUserDigitalStacks {
    id
    name
    userId
  }
}
    `;

/**
 * __useGetUserDigitalStacksQuery__
 *
 * To run a query within a React component, call `useGetUserDigitalStacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDigitalStacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDigitalStacksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserDigitalStacksQuery(baseOptions?: Apollo.QueryHookOptions<GetUserDigitalStacksQuery, GetUserDigitalStacksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDigitalStacksQuery, GetUserDigitalStacksQueryVariables>(GetUserDigitalStacksDocument, options);
      }
export function useGetUserDigitalStacksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDigitalStacksQuery, GetUserDigitalStacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDigitalStacksQuery, GetUserDigitalStacksQueryVariables>(GetUserDigitalStacksDocument, options);
        }
export type GetUserDigitalStacksQueryHookResult = ReturnType<typeof useGetUserDigitalStacksQuery>;
export type GetUserDigitalStacksLazyQueryHookResult = ReturnType<typeof useGetUserDigitalStacksLazyQuery>;
export type GetUserDigitalStacksQueryResult = Apollo.QueryResult<GetUserDigitalStacksQuery, GetUserDigitalStacksQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($digitalStackId: String!, $name: String!, $price: String!, $quantity: Int!, $categories: [String]!, $imageCount: Int!, $tags: [String]!, $attributes: JSON!) {
  CreateProduct(
    digitalStackId: $digitalStackId
    name: $name
    price: $price
    quantity: $quantity
    categories: $categories
    imageCount: $imageCount
    tags: $tags
    attributes: $attributes
  ) {
    id
    name
    digitalStackId
    description
    price
    quantity
    thumbnailUrl
    imagesUrl
    tags
    attributes
    categories {
      filters {
        id
        isMultipleChoice
        isSelectableByUser
        name
        values {
          categoryFilterId
          id
          numberValue
          productId
          stringValue
          type
        }
      }
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      digitalStackId: // value for 'digitalStackId'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      quantity: // value for 'quantity'
 *      categories: // value for 'categories'
 *      imageCount: // value for 'imageCount'
 *      tags: // value for 'tags'
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($name: String!) {
  CreateCategory(name: $name) {
    id
    name
    parentId
    filters {
      id
      isMultipleChoice
      isSelectableByUser
      name
      values {
        categoryFilterId
        id
        numberValue
        productId
        stringValue
        type
      }
    }
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const GetCategoryDocument = gql`
    query GetCategory($categoryId: String!) {
  GetCategory(categoryId: $categoryId) {
    id
    name
    parentId
    filters {
      id
      isMultipleChoice
      isSelectableByUser
      name
      values {
        categoryFilterId
        id
        numberValue
        productId
        stringValue
        type
      }
    }
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetCategoriesWithoutFilterDocument = gql`
    query GetCategoriesWithoutFilter {
  GetCategories {
    id
    name
    parentId
  }
}
    `;

/**
 * __useGetCategoriesWithoutFilterQuery__
 *
 * To run a query within a React component, call `useGetCategoriesWithoutFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesWithoutFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesWithoutFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesWithoutFilterQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesWithoutFilterQuery, GetCategoriesWithoutFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesWithoutFilterQuery, GetCategoriesWithoutFilterQueryVariables>(GetCategoriesWithoutFilterDocument, options);
      }
export function useGetCategoriesWithoutFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesWithoutFilterQuery, GetCategoriesWithoutFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesWithoutFilterQuery, GetCategoriesWithoutFilterQueryVariables>(GetCategoriesWithoutFilterDocument, options);
        }
export type GetCategoriesWithoutFilterQueryHookResult = ReturnType<typeof useGetCategoriesWithoutFilterQuery>;
export type GetCategoriesWithoutFilterLazyQueryHookResult = ReturnType<typeof useGetCategoriesWithoutFilterLazyQuery>;
export type GetCategoriesWithoutFilterQueryResult = Apollo.QueryResult<GetCategoriesWithoutFilterQuery, GetCategoriesWithoutFilterQueryVariables>;
export const GetFiltersDocument = gql`
    query GetFilters($categoryId: [String]) {
  GetCategories(categoryId: $categoryId) {
    name
    id
    filters {
      expectedRange
      expectedStrings
      id
      isMultipleChoice
      isSelectableByUser
      name
      values {
        categoryFilterId
        id
        numberValue
        productId
        stringValue
        type
      }
    }
  }
}
    `;

/**
 * __useGetFiltersQuery__
 *
 * To run a query within a React component, call `useGetFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFiltersQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetFiltersQuery(baseOptions?: Apollo.QueryHookOptions<GetFiltersQuery, GetFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFiltersQuery, GetFiltersQueryVariables>(GetFiltersDocument, options);
      }
export function useGetFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFiltersQuery, GetFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFiltersQuery, GetFiltersQueryVariables>(GetFiltersDocument, options);
        }
export type GetFiltersQueryHookResult = ReturnType<typeof useGetFiltersQuery>;
export type GetFiltersLazyQueryHookResult = ReturnType<typeof useGetFiltersLazyQuery>;
export type GetFiltersQueryResult = Apollo.QueryResult<GetFiltersQuery, GetFiltersQueryVariables>;
export const CreateFilterValueDocument = gql`
    mutation CreateFilterValue($categoryFilterId: String!, $productId: String!, $type: String!, $stringValue: String, $numberValue: Int) {
  CreateFilterValue(
    categoryFilterId: $categoryFilterId
    productId: $productId
    type: $type
    stringValue: $stringValue
    numberValue: $numberValue
  ) {
    id
    stringValue
    numberValue
    type
    categoryFilterId
    productId
  }
}
    `;
export type CreateFilterValueMutationFn = Apollo.MutationFunction<CreateFilterValueMutation, CreateFilterValueMutationVariables>;

/**
 * __useCreateFilterValueMutation__
 *
 * To run a mutation, you first call `useCreateFilterValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFilterValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFilterValueMutation, { data, loading, error }] = useCreateFilterValueMutation({
 *   variables: {
 *      categoryFilterId: // value for 'categoryFilterId'
 *      productId: // value for 'productId'
 *      type: // value for 'type'
 *      stringValue: // value for 'stringValue'
 *      numberValue: // value for 'numberValue'
 *   },
 * });
 */
export function useCreateFilterValueMutation(baseOptions?: Apollo.MutationHookOptions<CreateFilterValueMutation, CreateFilterValueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFilterValueMutation, CreateFilterValueMutationVariables>(CreateFilterValueDocument, options);
      }
export type CreateFilterValueMutationHookResult = ReturnType<typeof useCreateFilterValueMutation>;
export type CreateFilterValueMutationResult = Apollo.MutationResult<CreateFilterValueMutation>;
export type CreateFilterValueMutationOptions = Apollo.BaseMutationOptions<CreateFilterValueMutation, CreateFilterValueMutationVariables>;
export const LoginBySmsDocument = gql`
    mutation LoginBySms($smsId: String!, $code: String!, $phoneNumber: String!) {
  LoginBySms(smsId: $smsId, code: $code, phoneNumber: $phoneNumber) {
    id
    phoneNumber
    isPhoneVerified
    isDocumentsVerified
  }
}
    `;
export type LoginBySmsMutationFn = Apollo.MutationFunction<LoginBySmsMutation, LoginBySmsMutationVariables>;

/**
 * __useLoginBySmsMutation__
 *
 * To run a mutation, you first call `useLoginBySmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginBySmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginBySmsMutation, { data, loading, error }] = useLoginBySmsMutation({
 *   variables: {
 *      smsId: // value for 'smsId'
 *      code: // value for 'code'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useLoginBySmsMutation(baseOptions?: Apollo.MutationHookOptions<LoginBySmsMutation, LoginBySmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginBySmsMutation, LoginBySmsMutationVariables>(LoginBySmsDocument, options);
      }
export type LoginBySmsMutationHookResult = ReturnType<typeof useLoginBySmsMutation>;
export type LoginBySmsMutationResult = Apollo.MutationResult<LoginBySmsMutation>;
export type LoginBySmsMutationOptions = Apollo.BaseMutationOptions<LoginBySmsMutation, LoginBySmsMutationVariables>;
export const SendLoginCodeDocument = gql`
    mutation SendLoginCode($phoneNumber: String!) {
  SendLoginCode(phoneNumber: $phoneNumber) {
    id
    phonenumber
    expireDate
  }
}
    `;
export type SendLoginCodeMutationFn = Apollo.MutationFunction<SendLoginCodeMutation, SendLoginCodeMutationVariables>;

/**
 * __useSendLoginCodeMutation__
 *
 * To run a mutation, you first call `useSendLoginCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendLoginCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendLoginCodeMutation, { data, loading, error }] = useSendLoginCodeMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSendLoginCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendLoginCodeMutation, SendLoginCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendLoginCodeMutation, SendLoginCodeMutationVariables>(SendLoginCodeDocument, options);
      }
export type SendLoginCodeMutationHookResult = ReturnType<typeof useSendLoginCodeMutation>;
export type SendLoginCodeMutationResult = Apollo.MutationResult<SendLoginCodeMutation>;
export type SendLoginCodeMutationOptions = Apollo.BaseMutationOptions<SendLoginCodeMutation, SendLoginCodeMutationVariables>;
export const LoginByPassDocument = gql`
    mutation LoginByPass($email: String!, $phoneNumber: String!, $password: String!) {
  LoginByPass(email: $email, phoneNumber: $phoneNumber, password: $password) {
    id
    phoneNumber
    isPhoneVerified
    isDocumentsVerified
  }
}
    `;
export type LoginByPassMutationFn = Apollo.MutationFunction<LoginByPassMutation, LoginByPassMutationVariables>;

/**
 * __useLoginByPassMutation__
 *
 * To run a mutation, you first call `useLoginByPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginByPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginByPassMutation, { data, loading, error }] = useLoginByPassMutation({
 *   variables: {
 *      email: // value for 'email'
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginByPassMutation(baseOptions?: Apollo.MutationHookOptions<LoginByPassMutation, LoginByPassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginByPassMutation, LoginByPassMutationVariables>(LoginByPassDocument, options);
      }
export type LoginByPassMutationHookResult = ReturnType<typeof useLoginByPassMutation>;
export type LoginByPassMutationResult = Apollo.MutationResult<LoginByPassMutation>;
export type LoginByPassMutationOptions = Apollo.BaseMutationOptions<LoginByPassMutation, LoginByPassMutationVariables>;
export const SendForgetPassCodeDocument = gql`
    mutation SendForgetPassCode($phoneNumber: String!) {
  SendForgetPassCode(phoneNumber: $phoneNumber) {
    id
    phonenumber
    expireDate
  }
}
    `;
export type SendForgetPassCodeMutationFn = Apollo.MutationFunction<SendForgetPassCodeMutation, SendForgetPassCodeMutationVariables>;

/**
 * __useSendForgetPassCodeMutation__
 *
 * To run a mutation, you first call `useSendForgetPassCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendForgetPassCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendForgetPassCodeMutation, { data, loading, error }] = useSendForgetPassCodeMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSendForgetPassCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendForgetPassCodeMutation, SendForgetPassCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendForgetPassCodeMutation, SendForgetPassCodeMutationVariables>(SendForgetPassCodeDocument, options);
      }
export type SendForgetPassCodeMutationHookResult = ReturnType<typeof useSendForgetPassCodeMutation>;
export type SendForgetPassCodeMutationResult = Apollo.MutationResult<SendForgetPassCodeMutation>;
export type SendForgetPassCodeMutationOptions = Apollo.BaseMutationOptions<SendForgetPassCodeMutation, SendForgetPassCodeMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    